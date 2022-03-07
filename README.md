# Unutulmaz Film/Dizi replikler API

Unutulmaz Film/Dizi replikleri için bir APİ, bitch!

## Production host

[https://unutulmaz-replikler.herokuapp.com](https://unutulmaz-replikler.herokuapp.com)

## API

### `GET /v1/replikler`

Rasgele replik için format:

> [https://unutulmaz-replikler.herokuapp.com/v1/replikler](https://unutulmaz-replikler.herokuapp.com/v1/replikler)

    [
    	{
    		"replik": "I am not in danger, Skyler. I AM the danger!",
    		"author": "Walter White"
    	}
    ]

### `GET /v1/replikler/{number}`

Çoklu replik almak için format `{number}` mesela. `GET /v1/replikler/5`.

> [https://unutulmaz-replikler.herokuapp.com/v1/replikler/5](https://unutulmaz-replikler.herokuapp.com/v1/replikler/5)

    [
      {
        "replik": "Clearly, his taste in women is the same as his taste in lawyers.",
        "author": "Saul Goodman"
      },
      {
        "replik": "Shut the f*ck up and let me die in peace.",
        "author": "Mike Ehrmantraut"
      },
      {
        "replik": "My name is ASAC Schrader, and you can go f*ck yourself.",
        "author": "Hank Schrader"
      },
      {
        "replik": "You all know exactly who I am. Say my name.",
        "author": "Walter White"
      },
      {
        "replik": "May his death satisfy you.",
        "author": "Gustavo Fring"
      }
    ]


## Contributing

Replik katkısında bulunmak için `replikler.js` faylına ekleyip pull request göndere bilirsiniz!

## Credits

Şu heriften bire bir çaldım. [Breaking Bad quotes](https://github.com/shevabam/breaking-bad-quotes.git).
