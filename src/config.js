import MainImage from './pictures/main.jpg';
import Memory1Image from './pictures/memory1.jpg';
import Memory2Image from './pictures/memory2.jpg';
import Memory3Image from './pictures/memory3.jpg';
import Memory4Image from './pictures/memory4.jpg';

// =================================================================
// 招待状の情報をここで編集してください
// =================================================================
export const config = {
    groomName: "寺島 諒",
    brideName: "水越 遥香",
    weddingDate: "2025-12-13T11:00:00",
    ceremonyTime: "11:00",
    receptionTime: "12:00",
    venue: {
        name: "ベルヴィ大宮サンパレス／GLANZ",
        address: "〒330-0845 埼玉県さいたま市大宮区仲町1-123",
        // 正しい会場の地図URLに修正済みです
        mapUrl: 'https://www.google.com/maps?q=ベルヴィ大宮サンパレス,埼玉県さいたま市大宮区仲町1-123&output=embed'
    },
    rsvpDeadline: "2025年10月29日",
    rsvpFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf1dl1C-RyamblyjmEb-K6GuLVlwcXAUvLKG35e8uYxHALmcw/viewform?usp=header",
    heroImage: MainImage,
    galleryImages: [
        { id: 1, src: Memory1Image },
        { id: 2, src: Memory2Image },
        { id: 3, src: Memory3Image },
        { id: 4, src: Memory4Image },
    ],
    greeting: {
        body: `私たち 寺島 諒 と 水越 遥香 は
            この度 結婚する運びとなりました

            いつも賑やかな音楽と 愛犬のルルに囲まれて
            笑いのたえない毎日を過ごしております

            これからは 時ににぎやかに 時に穏やかに
            ふたりと一匹で 温かい家庭を
            築いていきたいと思います

            つきましては 日頃お世話になっている皆様へ
            感謝の気持ちをお伝えしたく
            ささやかな祝宴を設けました

            ぜひ 私たちの新たな門出を
            見守っていただけますと幸いです
            皆様にお会いできることを
            心より楽しみにしております
            `
   },
};