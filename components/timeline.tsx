'use client'

import timeline from './timeline.module.scss';
import {MouseEvent} from "react";

export const Timeline = () => {
    let offsetX: number;
    let movingEdge: HTMLElement;
    let startMove = false;

    const moveEdge = (event: MouseEvent) => {
        if (startMove) movingEdge.style.left = `${event.clientX - offsetX - 15}px`;
    };

    const startMoveEdge = (event: MouseEvent<HTMLDivElement>) => {
        movingEdge = event.target as HTMLElement;
        offsetX = event.clientX - movingEdge.getBoundingClientRect().left;
        startMove = true;
    };

    const endMoveEdge = () => {
        // @ts-ignore
        document.getElementById('timeline').removeEventListener('mousemove', moveEdge);
        startMove = false;
    };

    return (
        <>
            <div id="timeline" className={timeline.timeline + ' bg-gray-400 h-72'} onMouseUp={endMoveEdge} onMouseMove={moveEdge}>
                <div className={timeline.media}>
                    <div className={timeline.edgeLeft} onMouseDown={startMoveEdge}></div>
                    <div className={timeline.edgeRight} onMouseDown={startMoveEdge}></div>
                </div>
            </div>
        </>
    );
};