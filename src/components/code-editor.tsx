import { useTheme } from "../hooks/theme-provider";

import { Controlled as ControlledEditor } from "react-codemirror2";
import type { Editor, EditorChange } from "codemirror";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/base16-light.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/addon/edit/closebrackets";

type NewEditorProps = {
  language: string;
  name: "HTML" | "CSS" | "JavaScript";
  value: string;
  onChange: (value: string) => void;
};

const COLORS = {
  HTML: "#ef4444",
  CSS: "#3b82f6",
  JavaScript: "#facc15",
};

const SYMBOLS = {
  HTML: "/",
  CSS: "#",
  JavaScript: "()",
};

const CodeEditor = ({ language, name, value, onChange }: NewEditorProps) => {
  const { theme } = useTheme();

  function handleChange(_editor: Editor, _data: EditorChange, value: string) {
    onChange(value);
  }

  return (
    <div className="w-full h-full flex flex-col items-start">
      <div className="bg-[#151515] text-gray-400 flex items-center gap-1 px-3 text-xs lg:text-md lg:font-semibold border-t-2 border-gray-400 py-2">
        <span
          className="text-black text-xs w-5 h-5 flex items-center justify-center rounded-md"
          style={{ background: COLORS[name] }}
        >
          {SYMBOLS[name]}
        </span>
        {name}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code w-full !h-full text-sm scrollbar scrollbar-thumb-pink-500"
        options={{
          lineWrapping: true,
          mode: language,
          theme: theme === "dark" ? "base16-dark" : "base16-light",
          lineNumbers: true,
          autoCloseBrackets: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
