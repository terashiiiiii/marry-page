import React, { useState, useEffect, useRef } from 'react';

// =================================================================
// 招待状の情報をここで編集してください
// =================================================================
const config = {
    groomName: "諒",
    brideName: "遥香",
    weddingDate: "2025-12-13T11:00:00",
    ceremonyTime: "11:00",
    receptionTime: "12:00",
    venue: {
        name: "ベルヴィ大宮サンパレス／GLANZ",
        address: "〒330-0845 埼玉県さいたま市大宮区仲町1-123",
        // 正しい会場の地図URLに修正済みです
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.997184403324!2d139.6242330763264!3d35.90700147255951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c1387d353655%3A0x8536e632d9116a4!2z44OZ44Or44O744Kq5aSa5a6u44K144Oz44OR44Os44K577yI44Kw44Op44Oz44K477yJ!5e0!3m2!1sja!2sjp!4v1719742436153!5m2!1sja!2sjp"
    },
    rsvpDeadline: "2025年10月31日",
    heroImage: "https://placehold.co/1200x675/E8DED5/5D4037?text=Ryo+%26+Haruka",
    galleryImages: [
        { id: 1, src: "https://placehold.co/600x600/E8DED5/5D4037?text=Our+Memory+1" },
        { id: 2, src: "https://placehold.co/600x600/D6A485/FFFFFF?text=Our+Memory+2" },
        { id: 3, src: "https://placehold.co/600x600/BCA598/FFFFFF?text=Our+Memory+3" },
        { id: 4, src: "https://placehold.co/600x600/E8DED5/5D4037?text=Our+Memory+4" },
    ],
    greeting: {
        title: "ご挨拶",
        body: `このたび 私たちは結婚式を挙げることになりました
               日頃お世話になっております皆様に
               私たちの門出をお見守りいただきたく
               ささやかながら小宴を催したく存じます
               ご多用中誠に恐縮ではございますが
               ぜひご出席賜りますようお願い申し上げます`
    },
    musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
};
// =================================================================
// ここから下は変更の必要はありません
// =================================================================


// --- アイコン ---
const PlayIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> );
const PauseIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg> );
const MapPinIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> );
const CalendarIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg> );
const XIcon = (props) => ( <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> );

// --- スクロールアニメーション用のカスタムフック ---
const useIntersectionObserver = (options) => {
    const [entry, setEntry] = useState(null);
    const [node, setNode] = useState(null);
    const observer = useRef(null);
    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        observer.current = new window.IntersectionObserver(([entry]) => setEntry(entry), options);
        if (node) observer.current.observe(node);
        return () => observer.current.disconnect();
    }, [node, options]);
    return [setNode, entry];
};

// --- アニメーション付きセクションコンポーネント ---
const AnimatedSection = ({ children, className = '' }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
    const isVisible = entry && entry.isIntersecting;
    return (
        <section ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
            {children}
        </section>
    );
};

// --- コンポーネント定義 ---
const Header = () => (
    <header className="text-center py-12">
        <h1 className="text-3xl md:text-4xl tracking-widest text-secondary noto-serif">{config.groomName} & {config.brideName}</h1>
        <p className="text-sm tracking-wider text-secondary/70 mt-2">WEDDING INVITATION</p>
    </header>
);

const Hero = () => (
    <AnimatedSection className="w-full max-w-5xl mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <img src={config.heroImage} alt="メイン写真" className="absolute inset-0 w-full h-full object-cover" />
        </div>
    </AnimatedSection>
);

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date(config.weddingDate) - +new Date();
        return difference > 0 ? {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        } : {};
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearTimeout(timer);
    });

    return (
        <AnimatedSection className="py-16">
            <div className="max-w-3xl mx-auto text-center px-4">
                <h2 className="text-2xl md:text-3xl noto-serif text-secondary mb-8">Save the Date</h2>
                <div className="grid grid-cols-4 gap-4">
                    {Object.keys(timeLeft).length ? (
                        Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className="text-center">
                                <div className="text-4xl md:text-6xl font-bold text-secondary">{value}</div>
                                <div className="text-sm uppercase noto-serif">{unit}</div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-4 text-2xl noto-serif">The big day is here!</div>
                    )}
                </div>
            </div>
        </AnimatedSection>
    );
};

const Message = () => (
    <AnimatedSection className="max-w-3xl mx-auto text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl noto-serif mb-6 text-secondary">{config.greeting.title}</h2>
        <div className="text-base md:text-lg leading-loose text-secondary whitespace-pre-line">
            {config.greeting.body}
        </div>
        <p className="mt-10 text-lg noto-serif text-secondary">
            {config.groomName} & {config.brideName}
        </p>
    </AnimatedSection>
);

const Details = () => (
    <AnimatedSection className="py-20 bg-white/60">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg order-last lg:order-first">
                <iframe src={config.venue.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="text-center lg:text-left">
                <h3 className="text-2xl noto-serif mb-8 text-secondary">Information</h3>
                <div className="space-y-6">
                    <div className="flex items-start justify-center lg:justify-start space-x-4">
                        <CalendarIcon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-bold text-lg text-secondary">日時</p>
                            <p className="text-secondary">{new Date(config.weddingDate).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })} ({new Date(config.weddingDate).toLocaleDateString('ja-JP', { weekday: 'short' })})</p>
                            <p className="text-secondary">挙式: {config.ceremonyTime} | 披露宴: {config.receptionTime}</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-center lg:justify-start space-x-4">
                        <MapPinIcon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-bold text-lg text-secondary">場所</p>
                            <p className="text-secondary">{config.venue.name}</p>
                            <p className="text-sm text-secondary">{config.venue.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <AnimatedSection className="max-w-5xl mx-auto py-20 px-6 text-center">
            <h2 className="text-2xl md:text-3xl noto-serif mb-10 text-secondary">Our Memories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {config.galleryImages.map(img => (
                    <div key={img.id} className="rounded-lg overflow-hidden shadow-md cursor-pointer group" onClick={() => setSelectedImg(img.src)}>
                        <img src={img.src} alt={`思い出の写真 ${img.id}`} className="w-full h-auto aspect-square object-cover transform transition-transform duration-300 group-hover:scale-105" />
                    </div>
                ))}
            </div>
            {selectedImg && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImg(null)}>
                    <button className="absolute top-4 right-4 text-white hover:text-white/80" onClick={() => setSelectedImg(null)}>
                        <XIcon className="w-10 h-10"/>
                    </button>
                    <img src={selectedImg} alt="拡大表示" className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"/>
                </div>
            )}
        </AnimatedSection>
    );
};

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

const Footer = () => (
    <footer className="text-center py-16">
        <p className="noto-serif text-2xl text-secondary">Thank you</p>
        <p className="mt-3 text-sm tracking-widest text-secondary uppercase">{config.groomName} & {config.brideName}</p>
    </footer>
);

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            audioRef.current = new Audio(config.musicUrl);
            audioRef.current.loop = true;
        }
    }, []);
    const togglePlayPause = () => {
        if (!audioRef.current) return;
        const isPaused = audioRef.current.paused;
        if (isPaused) {
            audioRef.current.play().catch(e => console.error("Audio play failed:", e));
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(isPaused);
    };
    return (
        <div className="fixed bottom-5 right-5 z-40">
            <button onClick={togglePlayPause} className="w-14 h-14 bg-primary/80 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm hover:bg-primary transition-transform transform hover:scale-110" aria-label={isPlaying ? '音楽を停止' : '音楽を再生'}>
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
        </div>
    );
}

// --- メインアプリケーションコンポーネント ---
export default function App() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Inter:wght@400;700&display=swap');
                body { background-color: #FDF8F5; font-family: 'Inter', sans-serif; }
                .noto-serif { font-family: 'Noto Serif JP', serif; letter-spacing: 0.05em; }
                .bg-cream { background-color: #FDF8F5; }
                .bg-primary { background-color: #C99271; }
                .text-primary { color: #C99271; }
                .text-secondary { color: #5D4037; }
                .border-primary { border-color: #C99271; }
                .ring-primary { --tw-ring-color: #C99271; }
                .whitespace-pre-line { white-space: pre-line; }
            `}</style>
            
            <div className="bg-cream text-secondary">
                <Header />
                <main>
                    <Hero />
                    <Countdown />
                    <Message />
                    <Details />
                    <Gallery />
                    <Rsvp />
                </main>
                <Footer />
                <MusicPlayer />
            </div>
        </>
    );
}
