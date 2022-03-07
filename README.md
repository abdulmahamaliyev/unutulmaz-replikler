# Unutulmaz Film/Dizi replikler API

A simple API to retrieve some replikler of Unutulmaz Film/Dizi, bitch!

:globe_with_meridians: Website and demo: https://breakingbadreplikler.xyz/

## Production host

[https://unutulmaz-replikler.herokuapp.com](https://unutulmaz-replikler.herokuapp.com)

## API

### `GET /v1/replikler`

Get a random replik in this format:

> [https://unutulmaz-replikler.herokuapp.com/v1/replikler](https://unutulmaz-replikler.herokuapp.com/v1/replikler)

    [
    	{
    		"replik": "I am not in danger, Skyler. I AM the danger!",
    		"author": "Walter White"
    	}
    ]

### `GET /v1/replikler/{number}`

Returns an array with `{number}` replikler e.g. `GET /v1/replikler/5`.

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

## Docker

You can find the Dockerfile [here](https://github.com/helioxy/dockerfiles/tree/master/unutulmaz-replikler) and on [Docker Hub](https://hub.docker.com/r/helioxy/unutulmaz-replikler/).

## Contributing

If you want to add some replikler, just add them in `replikler.js` file and do a pull request !

## Credits

Inspired by [Breaking Bad quotes](https://github.com/shevabam/breaking-bad-quotes.git).
