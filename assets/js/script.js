function change_language(obj) {
    const language = obj.value;
    if (language == 'en') {
        location.href = "/en/";
    } else {
        location.href = "/";
    }
}