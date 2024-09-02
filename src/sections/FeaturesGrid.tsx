import { CutCornerButton } from "../components/CutCornerButton"
import { LearnMoreButtonComponent } from "../components/LearnMoreBtn"

const listItems = [
    'Experience unparalleled security and scalability',
    'Fully benifit from scalable network effects',
    'Unlock the potential of decentralized networks'
]

export const FeaturesGridSection = () => {
    return <>
    <section className="py-24">
        <div className="container">
            <div>
            <h2 className="font-heading font-black text-4xl">Empowering the future of blockchain.</h2>
            <p className="text-xl text-zinc-400 mt-8">
                Blockforge provides robust and secure infrastructure to support the next generation of decentralized applications.
            </p>
            <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                        <div className="inline-flex justify-center items-center size-8 outline outline-4 -outline-offset-4 rounded-full outline-fuchsia-500/10 flex-shrink-0">
                            <div className="size-1.5 bg-fuchsia-500 rounded-full">
                            </div>
                        </div>
                        <span className="text-xl font-bold">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className=" flex gap-8 mt-12">
            <CutCornerButton>
                Get Started
            </CutCornerButton>
           <LearnMoreButtonComponent>
            Learn More
           </LearnMoreButtonComponent>
        </div>

        <div className="">
            <h2>Blockforge leads the way.</h2>
            <p>Blockforge is dedicated to supporting the evolution of web3 applications by delivering the necessary infrastructure and security for web3.</p>
            <p>Blockforge champtions web3 for everyone. As a decentralized blockchain scaling platform, Blockforge enables developers to create scalable, user-friendly apps with low transcation costs, all while ensuing robust security.</p>
            <div className="flex">
                <CutCornerButton>Get Started</CutCornerButton>
                <LearnMoreButtonComponent>Learn More</LearnMoreButtonComponent>
            </div>
        </div>

        </div>
    </section>
    
    </>
}