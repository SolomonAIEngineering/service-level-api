import { ChatGPTMessage } from './ChatLine';
import { ContextTypes, initialAnalyticMessage } from './AIChat';
import { Button } from 'src/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'src/components/ui/alert-dialog';
import { GripIcon } from 'lucide-react';
import { SelectGroup, SelectLabel } from 'src/components/ui/select';
import { Switch } from 'src/components/ui/switch';
import { useToast } from 'src/components/ui/use-toast';

export const EmbeddedContextPickerComponent: React.FC<{
  className?: string;
  messages: ChatGPTMessage[];
  selectedContext: ContextTypes;
  setContextCallback: (context: ContextTypes) => void;
  baseContext: ContextTypes;
  contextFamily: ContextTypes[];
}> = ({
  className,
  selectedContext,
  baseContext,
  contextFamily,
  setContextCallback,
}) => {
  const { toast } = useToast();

  return (
    <div className={className}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="flex flex-row gap-2 text-black bg-white border">
            <GripIcon className="w-6 h-6" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="p-3">
              Tell me what to account for when answering your questions
            </AlertDialogTitle>
            <AlertDialogDescription>
              <SelectGroup>
                <SelectLabel>
                  {' '}
                  {initialAnalyticMessage.length < 2 && (
                    <>
                      <span className="flex flex-grow clear-both mx-auto text-gray-800 dark:text-gray-800">
                        Pick an option below to get started ! If you dont pick
                        anything you can still ask questions against your
                        general finances ! Please pick only one option at a time
                      </span>
                      {selectedContext && (
                        <span className="flex flex-grow clear-both mx-auto my-3 font-bold text-black text-l dark:text-black">
                          Selected: {selectedContext.contextName}
                        </span>
                      )}
                    </>
                  )}
                  {contextFamily?.map((secondaryContext) => (
                    <div
                      key={secondaryContext.contextName}
                      className="flex items-center py-3 space-x-2"
                    >
                      <Switch
                        id="terms"
                        className="rounded-full"
                        onClick={() => {
                          if (
                            selectedContext.contextName !==
                              baseContext.contextName ||
                            (selectedContext.contextName !==
                              secondaryContext.contextName &&
                              selectedContext.contextName !==
                                baseContext.contextName)
                          ) {
                            setContextCallback(baseContext);
                          } else {
                            if (
                              Object.keys(secondaryContext.context).length === 0
                            ) {
                              toast({
                                title:
                                  'Error Occured While Processing Your Request',
                                description: `${secondaryContext.contextName} are not connected ! `,
                              });
                            }
                            setContextCallback(secondaryContext);
                          }
                        }}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Ask questions against {secondaryContext.contextName}
                      </label>
                    </div>
                  ))}
                </SelectLabel>
              </SelectGroup>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
