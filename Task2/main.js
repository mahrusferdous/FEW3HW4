function handleGetData(event) {
    event.preventDefault();

    const data = event.target.elements;
    // console.log(data);

    const datas = {
        name: data.name.value,
        email: data.email.value,
        password: data[2].value,
    };

    if (datas.name === "" || datas.email === "" || datas.password === "") {
        alert("Please fill in all fields");
        return;
    }

    console.log(datas);
}
