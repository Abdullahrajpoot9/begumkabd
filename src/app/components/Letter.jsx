"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Mail, Heart, Sparkles, RotateCcw } from "lucide-react"
import confetti from "canvas-confetti"

export default function Letter() {
    const [isOpen, setIsOpen] = useState(false)
    const [showText, setShowText] = useState(false)
    const [currentText, setCurrentText] = useState("")
    const [showCursor, setShowCursor] = useState(true)

    const letterText = `Happy birthday meri pyaarii begumm💞🤧✨

Allah paak apko khushh rkhe or laambi or sehat wli zindagi ata farmaye❤✨ Allah paak apko jld se jld mera mehram bnaye taake ham apna 1 naya safar start kr sken 🥹💓 you are my better half😭❤ you are to complete half of my deen😭💗 

In Sha Allah ap mere pas ao gi us waqt jo allah ne muqarar kr rkha hai 💞 tb tk ke liye allah pak hame sbr krne ki toufiq de or hame khush rkhe hr haal mein(Ameen🤲🏻)

Meri pyaari mama😭💗 sbse zyaada pyaari❤✨

Kbhi bhi ye nhi sochna ke mera pyaar apke liye km huwa mai apko hr din hr ghari hr minute ke bad se or zyada pyaar krrha 💓😭✨ ap meri itni pyaari mama hain😭❤ bhla mai apse pyar krna kese chor skta hun mai apni mama ke bgair kuch nhi🥹❤ mai jo hun sirf apki wja se hun💖😭

meri khushi apse mera dukh apse mujhy kisi se koi fark ni prta ap khush hain to mai khush hun😭💖 agr ap dukhi hain to mai bhi dukhi hun😭❤ agr apko koi pareshani hai to mujhy bhi hai 😭💞 

mujhy apse boht lagao hai kbhi na khatam hone wala pyaar hai apse😭❤

Allah pak ham dono ko boht jagaho pr azmaye ga kiuke ye duniya hai hamara 1 test hai allah pak azmaye ga or hamen us azmaish pr pura utrna hai 😭❤ 

himmat ni harni kbhi bhi koi bhi pareshani ya mushkil ae gi to wo allah hi ki trf se ho gi or beshak allah hi use hal bhi kre ga hamen bs sabar krna hai na shukri ni krni or mayus ni hona allah pak ki rehmat se beshak wo jo bhi krega acha hi krega🫶🏻😭

Hamne allah ki raza ke liye bat krna chori In Sha Allah hamen iska ajar bhi milega bs hamen allah pak se pehle jo kuch hamne kiya la ilmi ki halat mein kiya us ke liye toba kren ge or beshak allah khoob mehrban or maaf krne wala hai🙂❤ 

wo hamen dubara milayga pr is baar apne tarike se halal tarike se✨😭❤ In Sha Allah ❤😭

Ma Sha Allah baari ho gai hainn aap😂❤ mere se 1 saal chotii ap 16 ki or mai 17 ka 🥹😂 allah pak apko sehat wli lambi zindagii de 🙂❤ or mere saath khush rkhe😭❤( Ameen🤲🏻)

Jb bhi aapko dekhta hunn gum ho jata hun😭 kho jata hun apki ankho mein😭💖 
Aj date 2 october day thursday apka islamiyat ka paper tha mai smjha 2 ghante ka hai mai 6 5 tk inquiry aya tha pr chutti hi ni hui thi😭 phir mai stats ke lec ke pehle aya tha canteen ke side se arha tha apko mene dekha but apne ni dekha shyd😭 mai khush ho gya tha pr apne meri eyes mein ni dekha 😭 phir sir shahid agay the mujhy jana pra class mein🥲 kehne ka mqsd mai kho gya tha but dub nhi ska apne meri trf dekha nhi😭😭 sad ho gya mai but chlen koi baat nhi 🙂❤ 

Be happy today is your day enjoyyyy!💖😭

Love you sooo muchhh😭💞💋`

    useEffect(() => {
        if (showText) {
            let index = 0
            const timer = setInterval(() => {
                if (index < letterText.length) {
                    setCurrentText(letterText.slice(0, index + 1))
                    index++

                } else {
                    clearInterval(timer)
                    setShowCursor(false)
                    confetti({
                        particleCount: 50,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ["#ff69b4", "#ff1493", "#9370db", "#8a2be2", "#ffd700"],
                    })
                }
            }, 30)

            return () => clearInterval(timer)
        }
    }, [showText, letterText])

    const handleOpenLetter = () => {
        setIsOpen(true)
        setTimeout(() => {
            setShowText(true)
        }, 800)
    }

    const handleReset = () => {
        setIsOpen(false)
        setShowText(false)
        setCurrentText("")
        setShowCursor(true)
    }

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-4xl w-full">
                <motion.div
                    className="text-center mb-8"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-4xl md:text-6xl py-1 md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4">
                        A Special Letter
                    </h1>
                    <p className="text-lg text-purple-300">Just for you, on your special day 💌</p>
                </motion.div>

                <motion.div
                    className="relative w-full h-full flex justify-center "
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                    }}
                >
                    <AnimatePresence mode="wait">
                        {!isOpen ? (
                            <motion.div
                                key="envelope"
                                className="relative cursor-pointer"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleOpenLetter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ rotateX: -90, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-80 h-52 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl shadow-2xl border-2 border-pink-300 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-26 bg-gradient-to-br from-pink-300 to-purple-300 transform origin-top"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-br from-pink-100 to-purple-100"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Mail className="w-16 h-16 text-pink-500" />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <Heart className="w-6 h-6 text-red-500 fill-current" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <Sparkles className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <motion.div
                                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-pink-700 text-base font-semibold"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        Click to open
                                    </motion.div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="letter"
                                className="w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-pink-300 p-8 relative transition-all"
                                initial={{ rotateX: -90, opacity: 0 }}
                                animate={{ rotateX: 0, opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.2 }}
                                transition={{ duration: 0.8, type: "spring" }}
                                style={{
                                    background:
                                        "linear-gradient(135deg, #fce7f3 0%, #fae8ff 25%, #e0e7ff 50%, #fdf2f8 75%, #fce7f3 100%)",
                                }}
                            >
                                <div className="text-center mb-6">
                                    <motion.div
                                        className="inline-block"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <Heart className="w-12 h-12 text-red-500 fill-current mx-auto mb-3" />
                                    </motion.div>
                                </div>

                                <div className="min-h-72 max-h-72 overflow-y-auto text-gray-700 leading-relaxed">
                                    {showText && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 mr-2 ">
                                            <div className="whitespace-pre-wrap font-cute">
                                                {currentText}
                                                {showCursor && (
                                                    <motion.span
                                                        className="inline-block w-0.5 h-4 bg-purple-600 ml-1"
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ duration: 0.8, repeat: Infinity }}
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {currentText === letterText && (
                                    <motion.div
                                        className="text-center mt-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <button
                                            onClick={handleReset}
                                            className="inline-flex items-center gap-2 bg-white/60 text-pink-600 font-medium border border-pink-400 px-5 py-2 rounded-full hover:bg-pink-100 transition-all"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                            Read Again
                                        </button>
                                    </motion.div>
                                )}

                                <div className="absolute top-4 left-4">
                                    <Sparkles className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <Heart className="w-6 h-6 text-rose-500 fill-current" />
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <Heart className="w-6 h-6 text-pink-500 fill-current" />
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <Sparkles className="w-6 h-6 text-purple-500" />
                                </div>
                            </motion.div>

                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    )
}
