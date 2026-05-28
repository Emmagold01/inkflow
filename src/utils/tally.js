/**
 * Triggers the Tally waitlist popup modal programmatically.
 * Can pre-fill fields like the user's email if they have already typed it.
 * 
 * @param {string} email - Optional email to pre-fill in the form
 */
export const openTallyForm = (email = "") => {
  if (typeof window !== "undefined" && window.Tally) {
    window.Tally.openPopup("dWkL1D", {
      layout: "modal",
      hiddenFields: {
        email: email,
      },
    });
  } else {
    // Fallback: Open form in a new tab if Tally script hasn't loaded yet
    const query = email ? `?email=${encodeURIComponent(email)}` : "";
    window.open(`https://tally.so/r/dWkL1D${query}`, "_blank");
  }
};
