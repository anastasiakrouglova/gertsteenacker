{
    let allKoppels;

    const getUniqueKoppel = () => {
        const koppels = [];
        allKoppels.forEach(koppel => {
          if(!koppels.includes(koppel.img)){
            koppels.push(koppel.img);
          }
        });
        return koppels;
    }

    const setActiveElement = $li => {
        const $old = document.querySelector(`.active`);
        if ($old) {
          $old.classList.add(`filter-koppel`);
          $old.classList.remove(`active`);
        }
        $li.classList.remove(`filter-koppel`);
        $li.classList.add(`active`);
      }

    const createFilterKoppels = () => {
        const $ulKoppels = document.querySelector(`.koppels`);

        getUniqueKoppel().forEach(koppel => {
            const $button = document.createElement(`button`);
            const $image = document.createElement(`img`)
            $button.value = koppel;
            $button.classList.add(`filter-koppel`);

            $image.src = `./src/images/wedding/${koppel}.jpg`;
            $image.width = 100;
            $image.classList.add(`review-img`);

            if ($button.value === 'gertjan') {
                $button.classList.add(`active`);
            }

            $button.addEventListener('click', () => {
                setActiveElement($button);

                $reviewKoppel = document.querySelector(`.review-container`);
                $reviewKoppel.innerHTML = ``;
                allKoppels.forEach(kpl => {
                    if (koppel === kpl.img) {
                        const $h3 = document.createElement(`h3`);
                        $h3.innerHTML = kpl.name;
                        $h3.classList.add(`review-title`);

                        const $text = document.createElement(`p`);
                        $text.innerHTML = `"${kpl.text}"`;
                        $text.classList.add(`review-text`);

                        $reviewKoppel.appendChild($h3);
                        $reviewKoppel.appendChild($text);
                    }
                })
            })

            $button.appendChild($image);
            $ulKoppels.appendChild($button);
        })
    }


    const initFetch = () => {
        const url = `src/data/koppels.json`;
        fetch(url)
          .then(r=>r.json())
          .then(jsonData => {
              allKoppels = jsonData;
              console.log(allKoppels);
              createFilterKoppels();
          });
    }

  const init = () => {
    initFetch();
  };
  init();
}

