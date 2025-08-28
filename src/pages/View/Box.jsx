import { useState } from 'react';
import '../index.css'
function Box() {
    const [StartWith, setStartWith] = useState(0);
    const [Split, setSplit] = useState(0);
    const [Target, setTarget] = useState(0);
    const [Margin, setMargin] = useState(0);
    return (
        <>
            <div className="w-full h-screen bg-black flex items-center justify-center">
                <div className='flex w-1/4 flex-col bg-red-500 rounded-2xl'>
                    <div className="flex flex-col space-y-2 px-5 py-5 ">
                        <label className='text-white'>Start With</label>
                        <div className="flex-wrap w-full flex-row space-x-4 ">
                            <input type="text" className='w-full rounded-3xl px-5 outline-none' placeholder="Startwith" value={StartWith} onChange={(e) => setStartWith(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 px-5 py-5 ">
                        <label className='text-white'>Split Value</label>
                        <div className="flex-wrap w-full flex-row space-x-4 ">
                            <input type="text" className='w-full rounded-3xl px-5 outline-none' placeholder="Split Value" value={Split} onChange={(e) => setSplit(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 px-5 py-5 ">
                        <label className='text-white'>Target Value</label>
                        <div className="flex-wrap w-full flex-row space-x-4 ">
                            <input type="text" className='w-full rounded-3xl px-5 outline-none' placeholder="Target Value" value={Target} onChange={(e) => setTarget(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 px-5 py-5 ">
                        <label className='text-white'>Margin Value</label>
                        <div className="flex-wrap w-full flex-row space-x-4 ">
                            <input type="text" className='w-full rounded-3xl px-5 outline-none' placeholder="Margin Value" value={Margin} onChange={(e) => setMargin(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Box;
