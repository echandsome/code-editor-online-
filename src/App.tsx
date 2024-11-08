import { useState, useEffect, useRef } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import Navbar from "@/components/Navbar";
import CodeEditor from "@/components/code-editor";

import "./App.css";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("javascript", "");
  const [code, setCode] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCode(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  //TODO For Making an integrated Console
  const iframeRef = useRef(null);
  // const handleIframeError = (event: any) => {
  //   // const errorMessage = event.message;
  //   // console.error('Error in the iframe:', errorMessage);
  //   console.log("hellow", event);
  //   // Handle the error as needed
  // };

  // useEffect(() => {
  //   const iframe = iframeRef.current;
  //   console.log(iframe);
  //   iframe?.contentWindow?.addEventListener("error", handleIframeError);

  //   // return () => {
  //   //   iframe.contentWindow.removeEventListener('mouseup', handleIframeError);
  //   // };
  // }, []);

  
  return (
    <div>
      <div className="min-h-screen flex flex-col scrollbar scrollbar-thumb-red-600">
        <Navbar />

        <ResizablePanelGroup
          direction="vertical"
          className="!h-[calc(100vh-4rem)] rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup
              direction="horizontal"
              className="px-3 pt-1 pb-5 bg-black"
            >
              <ResizablePanel defaultSize={33}>
                <CodeEditor
                  language="xml"
                  name="HTML"
                  value={html}
                  onChange={setHtml}
                />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={33}>
                <CodeEditor
                  language="css"
                  name="CSS"
                  value={css}
                  onChange={setCss}
                />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={33}>
                <CodeEditor
                  language="javascript"
                  name="JavaScript"
                  value={js}
                  onChange={setJs}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <iframe
              srcDoc={code}
              title="output"
              className="w-full h-full"
              // sandbox='allow-scripts' //for security purposes (commented out in order to show console errors)
              ref={iframeRef}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
