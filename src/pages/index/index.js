Page({
  data: {
    items: [
      { name: "Angular", value: "AngularJS" },
      { name: "React", value: "React" },
      { name: "Polymer", value: "Polymer" },
      { name: "Vue", value: "Vue.js" },
      { name: "Ember", value: "Ember.js" },
      { name: "Backbone", value: "Backbone.js" },
    ],
    selected: "",
    groupValue: '',
  },
  onTap() {
    this.setData({
      selected: "",
      groupValue: '',
    });
    // console.log("====Selected====", this.data.selected);
  },
  onChange(event) {
    this.setData({
      selected: event.detail.value,
    });
    // console.log("====Selected==Change====", this.data.selected);
  },
  onChangeCustom(value) {
    console.log('value :>> ', value);
    this.setData({ groupValue: value });
  }
});
