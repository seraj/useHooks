function randomId() {
  return `sv-${Math.random().toString(36).slice(2, 11)}`;
}

export default randomId;
