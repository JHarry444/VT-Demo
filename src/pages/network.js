

(function () {
    const TRAINER_URL = "http://localhost:8080/trainers";
    function fetchTrainers() {
        $.ajax({ url: TRAINER_URL }).done(function (trainers) {
            const output = $("#trainers")[0];
            output.innerHTML = "";
            for (let trainer of trainers) {
                const newTrainer = document.createElement("div");
                newTrainer.className = "card";

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";

                const nameEle = document.createElement("h5");
                nameEle.innerText = trainer.name;
                nameEle.className = "card-title";
                cardBody.appendChild(nameEle);



                const IdEle = document.createElement("p");
                IdEle.innerText = `ID: ${trainer.id}`;
                IdEle.className = "card-text";
                cardBody.appendChild(IdEle);



                const ageEle = document.createElement("p");
                ageEle.innerText = `Age: ${trainer.age}`;
                ageEle.className = "card-text";
                cardBody.appendChild(ageEle);

                const specialismEle = document.createElement("p");
                specialismEle.innerText = `Specialism: ${trainer.specialism}`;
                specialismEle.className = "card-text";
                cardBody.appendChild(specialismEle);

                newTrainer.appendChild(cardBody);
                output.appendChild(newTrainer);
            }
        });
    }
    const trainerForm = $("#trainerForm")[0];
    trainerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = { name: this.trainerName.value, age: this.trainerAge.value, specialism: this.trainerSpecialism.value }
        $
            .ajax({ url: TRAINER_URL, method: "POST", context: trainerForm, contentType: "application/json", data: JSON.stringify(data), dataType: "json" })
            .done(function (data) {
                console.log("DATA:", data);
                this.reset();
                this.trainerName.focus();
                fetchTrainers();
            });
    });

    $("#trainerDelete")[0].addEventListener("submit", function (e) {
        e.preventDefault();
        const id = this.deleteID.value;
        $.ajax({ url: `${TRAINER_URL}/${id}`, method: "DELETE" }).done(function (data) {
            console.log("DATA:", data);
            fetchTrainers();
        });
    });

    fetchTrainers();
})();
