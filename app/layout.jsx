
import '@styles/globals.css';

import Navbar from '@components/Navbar';
import Provider from '@components/Provider';


export const metadata = {
    title : 'PromptVault',
    description : 'Discover and share AI-generated prompts for your creative projects.',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <div className='main'>
             <div className='gradient'/>
            </div>
            <main className='app'>
                <Navbar />
                {children}
            </main>
            </Provider>
        </body>

    </html>
  )
}

export default RootLayout;
