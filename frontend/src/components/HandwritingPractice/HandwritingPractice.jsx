import React, { useEffect, useRef, useState } from "react";
import "./HandwritingPractice.css";

const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 320;
const FONT_FAMILY = '"Noto Sans SC", "Microsoft YaHei", sans-serif';

const getCanvasPoint = (event, canvas) => {
    const bounds = canvas.getBoundingClientRect();
    return {
        x: ((event.clientX - bounds.left) / bounds.width) * CANVAS_WIDTH,
        y: ((event.clientY - bounds.top) / bounds.height) * CANVAS_HEIGHT,
    };
};

const drawTarget = (context, target, color) => {
    const fontSize = Math.min(190, 280 / target.length);
    context.font = `500 ${fontSize}px ${FONT_FAMILY}`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = color;
    context.fillText(target, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, CANVAS_WIDTH - 48);
};

const checkWriting = (canvas, target) => {
    const writing = canvas.getContext("2d").getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT).data;
    const targetCanvas = document.createElement("canvas");
    targetCanvas.width = CANVAS_WIDTH;
    targetCanvas.height = CANVAS_HEIGHT;
    const targetContext = targetCanvas.getContext("2d");
    drawTarget(targetContext, target, "#000");
    const targetPixels = targetContext.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT).data;
    const step = 3;
    const radius = 5;
    let writingPixels = 0;
    let alignedWritingPixels = 0;
    let targetPixelsNearWriting = 0;
    let targetPixelCount = 0;

    for (let y = 0; y < CANVAS_HEIGHT; y += step) {
        for (let x = 0; x < CANVAS_WIDTH; x += step) {
            const pixelIndex = (y * CANVAS_WIDTH + x) * 4 + 3;
            if (writing[pixelIndex] > 80) {
                writingPixels += 1;
                let nearTarget = false;
                for (let offsetY = -radius; offsetY <= radius && !nearTarget; offsetY += 1) {
                    for (let offsetX = -radius; offsetX <= radius; offsetX += 1) {
                        const targetX = x + offsetX * step;
                        const targetY = y + offsetY * step;
                        if (
                            targetX >= 0 &&
                            targetX < CANVAS_WIDTH &&
                            targetY >= 0 &&
                            targetY < CANVAS_HEIGHT &&
                            targetPixels[(targetY * CANVAS_WIDTH + targetX) * 4 + 3] > 0
                        ) {
                            nearTarget = true;
                            break;
                        }
                    }
                }
                if (nearTarget) alignedWritingPixels += 1;
            }

            if (targetPixels[pixelIndex] > 0) {
                targetPixelCount += 1;
                let nearWriting = false;
                for (let offsetY = -radius; offsetY <= radius && !nearWriting; offsetY += 1) {
                    for (let offsetX = -radius; offsetX <= radius; offsetX += 1) {
                        const writingX = x + offsetX * step;
                        const writingY = y + offsetY * step;
                        if (
                            writingX >= 0 &&
                            writingX < CANVAS_WIDTH &&
                            writingY >= 0 &&
                            writingY < CANVAS_HEIGHT &&
                            writing[(writingY * CANVAS_WIDTH + writingX) * 4 + 3] > 80
                        ) {
                            nearWriting = true;
                            break;
                        }
                    }
                }
                if (nearWriting) targetPixelsNearWriting += 1;
            }
        }
    }

    return (
        writingPixels >= 40 &&
        alignedWritingPixels / writingPixels >= 0.75 &&
        targetPixelsNearWriting / targetPixelCount >= 0.12
    );
};

const HandwritingPractice = ({ vocabulary }) => {
    const canvasRef = useRef(null);
    const isDrawingRef = useRef(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [showGuide, setShowGuide] = useState(true);
    const currentWord = vocabulary[currentIndex];
    const target = currentWord.firstLang;
    const fontSize = Math.min(190, 280 / target.length);

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        setFeedback("");
    }, [currentIndex]);

    const startDrawing = (event) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const point = getCanvasPoint(event, canvas);
        canvas.setPointerCapture(event.pointerId);
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineCap = "round";
        context.lineJoin = "round";
        context.lineWidth = 9;
        context.strokeStyle = "#183e4c";
        isDrawingRef.current = true;
        setFeedback("");
    };

    const draw = (event) => {
        if (!isDrawingRef.current) return;
        const point = getCanvasPoint(event, canvasRef.current);
        const context = canvasRef.current.getContext("2d");
        context.lineTo(point.x, point.y);
        context.stroke();
    };

    const stopDrawing = () => {
        isDrawingRef.current = false;
    };

    const clearWriting = () => {
        const context = canvasRef.current.getContext("2d");
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        setFeedback("");
    };

    const handleCheck = () => {
        if (checkWriting(canvasRef.current, target)) {
            setFeedback(`Looks good! The character is ${target}.`);
        } else {
            setFeedback("Not quite yet. Try following more of the character guide.");
        }
    };

    const handleNext = () => {
        setCurrentIndex((index) => (index + 1) % vocabulary.length);
    };

    return (
        <section className="handwriting-practice" aria-labelledby="handwriting-title">
            <h1 id="handwriting-title">Write the Chinese</h1>
            <p className="handwriting-prompt">
                Write the character for <strong>{currentWord.secondLang}</strong>
                <span>{currentWord.pinyin}</span>
            </p>
            <div className="handwriting-canvas">
                <span
                    className="handwriting-guide"
                    aria-hidden="true"
                    style={{
                        fontSize: `${fontSize}px`,
                        visibility: showGuide ? "visible" : "hidden",
                    }}
                >
                    {target}
                </span>
                <canvas
                    ref={canvasRef}
                    className="handwriting-drawing"
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    aria-label="Drawing area. Trace the pale Chinese character with your finger or mouse."
                    onPointerDown={startDrawing}
                    onPointerMove={draw}
                    onPointerUp={stopDrawing}
                    onPointerCancel={stopDrawing}
                />
            </div>
            <p className="handwriting-instructions">Trace the pale guide, then check your writing.</p>
            <div className="handwriting-controls">
                <button type="button" onClick={clearWriting}>Clear</button>
                <button type="button" onClick={handleCheck}>Check</button>
                <button type="button" onClick={handleNext}>Next word</button>
                <button
                    type="button"
                    aria-pressed={showGuide}
                    onClick={() => setShowGuide((visible) => !visible)}
                >
                    {showGuide ? "Hide guide" : "Show guide"}
                </button>
            </div>
            <p className="handwriting-feedback" aria-live="polite">{feedback}</p>
        </section>
    );
};

export default HandwritingPractice;
