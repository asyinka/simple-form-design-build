export default class formDetails {
  constructor() {
    this.formData = [];
    this.id = 1;
  }

  createFormData(userName, userText) {
    const userInputs = {
      userName: userName,
      userText: userText,
      id: ++this.id,
    };
    this.formData.push(userInputs);
  }

  getFormDetails() {
    return this.formData;
  }
}
