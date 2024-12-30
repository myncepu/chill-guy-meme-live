"use client"

import { Toolbar } from "@/components/toolbar"
import { useFabric } from "@/hooks/use-fabric"
import "@/app/fonts.css"

export default function HomePage() {
  const {
    canvasRef,
    setBackgroundImage,
    addText,
    addChillGuy,
    changeFontFamily,
    changeTextColor,
    flipImage,
    deleteSelectedObject,
    downloadCanvas,
    changeBackgroundColor,
    currentBackgroundColor,
    selectedTextProperties,
    toggleFilter,
    isImageSelected,
    toggleDrawingMode,
    incrementBrushSize,
    setBrushColor,
    drawingSettings,
  } = useFabric()

  return (
    <>
      <div className="px-2 space-y-10 min-h-screen items-center h-full flex-col flex justify-between">
        <div></div>
        <canvas
          ref={canvasRef}
          className="border rounded-3xl overflow-hidden "
        />
        <div className="pt-10 pb-8 space-y-5 flex items-center flex-col">
          <Toolbar
            setBackgroundImage={setBackgroundImage}
            addText={addText}
            addChillGuy={addChillGuy}
            changeFontFamily={changeFontFamily}
            changeTextColor={changeTextColor}
            flipImage={flipImage}
            deleteSelectedObject={deleteSelectedObject}
            downloadCanvas={downloadCanvas}
            changeBackgroundColor={changeBackgroundColor}
            currentBackgroundColor={currentBackgroundColor}
            selectedTextProperties={selectedTextProperties}
            toggleFilter={toggleFilter}
            isImageSelected={isImageSelected}
            toggleDrawingMode={toggleDrawingMode}
            drawingSettings={drawingSettings}
            incrementBrushSize={incrementBrushSize}
            setBrushColor={setBrushColor}
          />
          <div className="flex flex-col justify-center text-center items-center text-sm md:flex-row">
            <a
              className="text-balance leading-loose text-muted-foreground  font-medium hover:text-blue-700"
              href="https://x.com/intent/follow?screen_name=sujjeeee"
              target="_blank"
            >
              Built by Sujjeee
            </a>
          </div>
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Create Your Perfect Chill Guy Meme</h2>
              <p className="text-xl text-muted-foreground">The most powerful and user-friendly Chill Guy Meme generator - create, customize, and share your memes in seconds.</p>
              <div className="grid gap-6 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">100% Free Online Tool</h3>
                    <p className="text-muted-foreground">Create unlimited Chill Guy Memes without any cost. No registration required, no watermarks, and no software downloads needed. Start creating instantly from your browser.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Intuitive Drag-and-Drop Interface</h3>
                    <p className="text-muted-foreground">Our user-friendly editor makes Chill Guy Meme creation a breeze. Simply drag elements, resize with your mouse, and customize with just a few clicks. Perfect for both beginners and meme experts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Advanced Customization Options</h3>
                    <p className="text-muted-foreground">Take your Chill Guy Meme to the next level with our comprehensive editing tools. Add custom backgrounds, choose from various fonts, apply filters, and position elements exactly how you want them.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">High-Quality Exports</h3>
                    <p className="text-muted-foreground">Download your Chill Guy Meme in high resolution, perfect for sharing on social media platforms like Twitter, Instagram, or Reddit. Your memes will always look crisp and professional.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Everything You Need to Know About Chill Guy Memes</h2>
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-semibold">What is a Chill Guy Meme?</h3>
                  <p className="text-muted-foreground">The Chill Guy Meme has become one of the internet's most beloved characters, representing a state of ultimate relaxation and carefree attitude. This iconic figure, featuring a simple stick figure with a laid-back pose, has captured the hearts of millions online for its ability to convey a "zero worries" mindset in any situation.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Why Create Chill Guy Memes?</h3>
                  <p className="text-muted-foreground">Chill Guy Memes are perfect for expressing moments of calm in chaotic situations, sharing relatable experiences, or simply bringing humor to everyday life. They've become a universal language for communicating a stress-free attitude and have gained massive popularity across social media platforms.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">How to Make the Perfect Chill Guy Meme?</h3>
                  <p className="text-muted-foreground">Creating the perfect Chill Guy Meme is all about context and creativity. Start with our pre-made Chill Guy template, add your custom background to set the scene, include witty text that relates to your situation, and adjust the positioning to create the perfect comedic timing. Our tool makes this entire process seamless and enjoyable.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Tips for Viral Chill Guy Memes</h3>
                  <p className="text-muted-foreground">The most successful Chill Guy Memes often play on relatable situations, current events, or universal experiences. Keep your text concise, make sure the contrast between the situation and the Chill Guy's attitude is clear, and don't be afraid to experiment with different backgrounds and positions.</p>
                </div>
              </div>
            </section>

            <footer className="pt-10 border-t">
              <div className="text-sm text-muted-foreground space-y-4">
                <p>© 2024 Chill Guy Meme Generator. All rights reserved.</p>
              </div>
            </footer>
          </div>


        </div>
      </div>
    </>
  )
}
