Component({
  props: {
    value: '',
    groupValue: '',
    text: '',
    onChange: () => {}
  },
  methods: {
    onTap() {
      this.props.onChange(this.props.value);
    }
  }
})
