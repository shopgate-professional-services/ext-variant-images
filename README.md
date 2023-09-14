# ext-variant-images

Shows variant selection as product image

## Configuration

- `imageCharacteristic (string)`: Name of the characteristic that will be shown as an image (e.g. "Color").
- `imageSize (number)`: The size of the image in pixel.
- `selectedColor (string)`: The border color of a selected characteristic.
- `showLableBeneathImage (boolean)`: true/false Whether the Label is shown beneath the image or not.


## Example configuration

```
{
  "imageCharacteristic": "Color",
  "imageSize": 75,
  "selectedColor": "#000",
  "showLableBeneathImage": true,
}
```

## Important informations

This extension needs to have an "eval job" set up by the Shopgate Support.

The eval job should provide a property for each variant named `swatchImage~` + `attribute-name` (`swatchImage~attribute-name`) with the image url as the value.

Example:

```
swatchImage~Red":"https://www.example.com/red_image.jpg,
swatchImage~Blue":"https://www.example.com/blue_image.jpg
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.


## License

Shopgate Cloud - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.