import React, { useState } from 'react';
import { config } from '../config';
import AnimatedSection from './AnimatedSection';

const Rsvp = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

    return (
        <AnimatedSection id="rsvp" className="py-20 bg-white/60">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-3xl noto-serif mb-4 text-secondary">ご出欠のこ連絡</h2>
                <p className="mb-10 text-secondary">お手数ですが {config.rsvpDeadline} までに下記フォームよりご返信ください</p>
                {submitted ? (
                    <div className="text-center py-10"><h3 className="text-xl noto-serif mb-4 text-secondary">ご回答ありがとうございます</h3><p className="text-secondary">お会いできるのを心より楽しみにしております</p></div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                         <div>
                            <label htmlFor="name" className="block text-left font-semibold mb-2 text-secondary">お名前</label>
                            <input type="text" id="name" name="name" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition" required />
                        </div>
                        <div>
                            <p className="block text-left font-semibold mb-2 text-secondary">ご出欠</p>
                            <div className="flex justify-center gap-4">
                                <label className="flex items-center justify-center space-x-2 p-3 border rounded-lg w-1/2 cursor-pointer transition-colors has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-primary"><input type="radio" name="attendance" value="attend" className="hidden" required /><span>ご出席</span></label>
                                <label className="flex items-center justify-center space-x-2 p-3 border rounded-lg w-1/2 cursor-pointer transition-colors has-[:checked]:bg-gray-400 has-[:checked]:text-white has-[:checked]:border-transparent"><input type="radio" name="attendance" value="decline" className="hidden" /><span>ご欠席</span></label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-left font-semibold mb-2 text-secondary">メッセージ</label>
                            <textarea id="message" name="message" rows="4" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg">送信する</button>
                    </form>
                )}
            </div>
        </AnimatedSection>
    );
};

export default Rsvp;