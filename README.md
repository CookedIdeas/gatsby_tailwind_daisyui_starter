# Project starter / project template : Gatsby site with Tailwind and DaisyUi

A 4 pages site made with Gatsby, using Tailwind and Daisy UI for styling with main needed features for a web project.

<p align="center">
  <img src="git-assets/index-page.png" alt="index page screenshot" width="50%" height="auto">
</p>

Visit it here : https://gatsby-tailwind-daisyui-template.netlify.app/

## Features

- Responsive header, with dropdown menu, link to home page with svg logo, theme switch
- Footer with text and copyright
- Dark/light theme using localStorage to store user's preference
- Favicon adapting to user's browser theme :
<p align="center">
  <img src="git-assets/favicon-light.png" alt="favicon-light-mode" width="25%" height="auto">
  <img src="git-assets/favicon-dark.png" alt="favicon-dark-mode" width="25%" height="auto">
</p>

### SEO optimization

With component Seo.jsx in 1_components/1_Seo_Head.
You can use default title and description or set custom page title and description with props.

Use site meta data with custom hook useSiteMetaData.

Social media sharing : og:image is set with a custom illustration (used image is og-image.png in 1_Components/1_Seo_Head).

<p align="center">
<img src="git-assets/ogimage.png" alt="og-image" width="50%" height="auto">
</p>

## Design pattern/folders structure

Folder sorted by name → I use number index to always have the same order :

- assets in 0_assets, images in 0_images
- components in 1_components
  - assets and custom hooks used for only one component are in the component folder
- styles in 99_styles

## Credits

Logo font : Coolin cher by Wates Awal (http://watesawal.blogspot.com/)

Images :

- Photo de Andrea Piacquadio: https://www.pexels.com/fr-fr/photo/homme-avec-un-casque-face-a-un-ecran-d-ordinateur-845451/
- Photo de OVAN: https://www.pexels.com/fr-fr/photo/ordinateur-portable-noir-et-blanc-62689/
- Photo de fauxels: https://www.pexels.com/fr-fr/photo/photo-de-personnes-pres-de-table-en-bois-3184431/
