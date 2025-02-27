import Feed from '@components/Feed';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
     <h1 className="head_text text-center">
        Discover and share AI-generated prompts.
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
     </h1>
    <p className="desc text-center">
        PromptVault is an Open Source AI Tool for modern world  to discover and share AI-generated prompts.

    </p>

    <Feed />
    
    </section>
  )
}

export default Home
