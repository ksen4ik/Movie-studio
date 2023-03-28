const changeTheme = (isChecked) => {
    isChecked ? document.body.setAttribute('light', '') : document.body.removeAttribute('light');
}
