import React from 'react';
import { getAssetURL } from '../utils/utils.js';

export default function Experiences({ Experiences }) {
    return (
        <>
            <h2 id="experiences" className="mb-11">Expériences</h2>
            <div className="flex flex-col justify-start">
                {experience.map((exp, index) => (
                    <div key={index} className="mb-6">
                        <span className="text-sm rounded-full ring-1 ring-slate-300 p-2">
                            {exp.start} {exp.start && exp.end ? "-" : ""} {exp.end}
                        </span>
                        <div className="flex items-center">
                            <p className="font-semibold flex flex-col">
                                <span className="font-semibold">{exp.title}</span>
                                <span className="font-normal italic">{"à " + exp.company}</span>
                            </p>
                            <img src={getAssetURL("media", exp.logo)} alt={`${exp.company} logo`} className="h-20 w-20 ml-5 object-contain" />
                        </div>
                        <p className="mt-2">{exp.description}</p>
                        <ul className="list-disc list-inside mt-2">
                            {exp.tasks.map((task, taskIndex) => (
                                <li key={taskIndex}>{task}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}