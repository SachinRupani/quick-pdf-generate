export interface NoteState {
  title: string;
  description: string;
}

export const defaultNoteState: NoteState = {
  title: "",
  description: "",
};
