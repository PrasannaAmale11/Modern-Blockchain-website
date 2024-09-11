import { easeInOut, motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

const testimonials = [
    {
        text: "The user experience is phenomenal, and the support team is always there to help. Highly recomended!",
        name: 'Erica Wyatt',
        title: 'Product Manager - blockLink',
        avatar: '/assets/images/avatar-erica-wyatt.jpg'
    },
    {
        text: "our productivity has skyrocketed since we started using Blockforge. It\'s a game-changer for our team",
        name: 'Noel Baldwin',
        title: 'Leade Developer - BitBridge',
        avatar: '/assets/images/avatar-noel-baldwin.jpg'
    },
    {
        text: "Intergrating process was seamless, and the performance improvements are beyond our expectations",
        name: 'Harry Bender',
        title: 'CTO - CryptoSolutions',
        avatar: '/assets/images/avatar-harry-bender.jpg'
    }
]

export const TestimonialsSection = () =>{
    return (
        <>
        <section className="py-32 bg-zinc-800">
            <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
                {testimonials.map((testimonials, testimonialIndex)=> (
                
                        <motion.blockquote key={testimonialIndex} className= {twMerge(
                            (testimonialIndex === 2 ) && "hidden lg:block"
                        )}
                        initial={{
                            opacity:0,
                            y:24
                        }}
                        whileInView={{
                            opacity:1,
                            y:0
                        }}
                        viewport={{
                            once:true,
                        }}
                        transition={{
                            delay: testimonialIndex * 0.2,
                            ease: easeInOut,
                            duration: 1
                        }}
                        >
                            <p className="font-heading text-3xl font-black lg:text-4xl">&ldquo;{testimonials.text}&rdquo;</p>
                            <cite className="mt-8 block">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <div className="size-16 bg-zinc-700 rounded-full bg-cover" style={{backgroundImage: `url(${testimonials.avatar})`}}></div>
                                    </div>
                                    <div>
                                        <div className="text-lg not-italic font-black">{testimonials.name}</div>
                                        <div className="text-zinc-40 not-italic">{testimonials.title}</div>
                                    </div>
                                </div>
                            </cite>
                        </motion.blockquote>
                    
                ))}
            </div>
            </div>
        </section>
        </>

    )
}