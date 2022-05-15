async function copy(testo: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(testo);
    return true;
  } catch (error) {
    console.log('Error copy in clipboard');
    console.log(error);
    return false;
  }
}

export const MyClipboard = {
  copy,
};
