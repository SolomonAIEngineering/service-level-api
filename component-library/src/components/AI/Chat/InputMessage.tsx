import { Button } from 'src/components/ui/button';
import { ToastAction } from 'src/components/ui/toast';
import { useToast } from 'src/components/ui/use-toast';

export type InputMessageProps = {
  input: string;
  setInput: (input: string) => void;
  sendMessage: (input: string) => void;
};

export const InputMessage: React.FC<InputMessageProps> = ({
  input,
  setInput,
  sendMessage,
}) => {
  const { toast } = useToast();

  return (
    <div className="flex clear-both mt-6">
      <input
        type="text"
        aria-label="chat input"
        required
        className="text-xs md:text-sm min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-xs"
        value={input}
        placeholder="Ask Solomon AI ..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            try {
              sendMessage(input);
            } catch (err) {
              toast({
                title: 'Error Occured While Processing Your Request',
                description:
                  'Experiencing problem given how many accounts you have ! Ask questions against a different account!',
                action: (
                  <ToastAction altText="Goto schedule to undo">
                    Failure
                  </ToastAction>
                ),
              });
            }
            setInput('');
          }
        }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button
        type="submit"
        className="flex-none ml-4"
        onClick={() => {
          try {
            sendMessage(input);
          } catch (err) {
            toast({
              title: 'Error Occured While Processing Your Request',
              description:
                'Experiencing problem given how many accounts you have ! Ask questions against a different account!',
              action: (
                <ToastAction altText="Goto schedule to undo">
                  Failure
                </ToastAction>
              ),
            });
          }
          setInput('');
        }}
      >
        Ask
      </Button>
    </div>
  );
};
