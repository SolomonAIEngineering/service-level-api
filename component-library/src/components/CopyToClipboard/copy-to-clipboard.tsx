import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

/**
 * Props for the CopyToClipboard component.
 */
interface CopyToClipboardProps {
  /** The text to be copied when the button is clicked. */
  text: string;
}

/**
 * A React component that renders a button which, when clicked, copies the provided text to the clipboard.
 *
 * @param props - The props for the component.
 * @returns The `CopyToClipboard` component.
 */
const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    // Reset the copied state after a short delay
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopyClick}
      className="p-[5%] flex flex-col justify-center items-center gap-1"
    >
      {!isCopied ? (
        <ClipboardDocumentCheckIcon className="inline-block w-6 h-6" />
      ) : null}
      <p
        className="text-xs"
        style={{
          fontSize: "0.5rem",
        }}
      >
        {isCopied ? "Copied!" : "Copy To Clipboard"}
      </p>
    </button>
  );
};

export default CopyToClipboard;
