import { isEmptyString } from "@/app/utils/UtilFunctions";
import { useEffect, useMemo, useState } from "react";
import { defaultNoteState, NoteState } from "../data/NoteState";

export const useCreateNoteComponentHook = (
  isRunningOnMobile: boolean,
  previousNotes?: NoteState
) => {
  const [noteState, setNoteState] = useState<NoteState>(
    previousNotes ?? defaultNoteState
  );

  const shouldEnableButton: boolean = useMemo(() => {
    return (
      !isEmptyString(noteState.title) && !isEmptyString(noteState.description)
    );
  }, [noteState]);

  const shouldDisplayPreviewButton: boolean = useMemo(() => {
    return !isRunningOnMobile;
  }, [isRunningOnMobile]);

  useEffect(() => {
    if (previousNotes) {
      setNoteState(previousNotes);
    }
  }, [previousNotes]);

  const updateTitle = (newTitle: string) => {
    setNoteState((prevState) => ({ ...prevState, title: newTitle }));
  };

  const updateDescription = (newDescription: string) => {
    setNoteState((prevState) => ({
      ...prevState,
      description: newDescription,
    }));
  };

  return {
    noteState,
    shouldEnableButton,
    shouldDisplayPreviewButton,
    updateTitle,
    updateDescription,
  };
};
