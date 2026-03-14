$(document).ready(function () {

    /* ---------------------------------------------------------
       INITIALISATION MAUGALLERY
       --------------------------------------------------------- */
    $('.gallery').mauGallery({
        columns: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });

    /* ---------------------------------------------------------
       NAVIGATION DANS LA MODALE (PRECEDENT / SUIVANT)
       --------------------------------------------------------- */

    // Récupération de toutes les images de la galerie
    let images = [];
    let currentIndex = 0;

    $('.gallery img').each(function () {
        images.push($(this).attr('src'));
    });

    // Quand on clique sur une image de la galerie
    $(document).on('click', '.gallery img', function () {
        const src = $(this).attr('src');
        currentIndex = images.indexOf(src);
    });

    // Quand la modale est affichée : on s'assure qu'il y a bien une image dedans
    $(document).on('shown.bs.modal', '#myAwesomeLightbox', function () {
        const $img = $('#myAwesomeLightbox').find('img').first();
        if ($img.length && images.indexOf($img.attr('src')) !== -1) {
            currentIndex = images.indexOf($img.attr('src'));
        }
    });

    // Bouton suivant
    $(document).on('click', '.mg-next', function () {
        const $img = $('#myAwesomeLightbox').find('img').first();
        if (!$img.length) return;

        currentIndex = (currentIndex + 1) % images.length;
        $img.attr('src', images[currentIndex]);
    });

    // Bouton précédent
    $(document).on('click', '.mg-prev', function () {
        const $img = $('#myAwesomeLightbox').find('img').first();
        if (!$img.length) return;

        currentIndex = (currentIndex - 1 + images.length) % images.length;
        $img.attr('src', images[currentIndex]);
    });
});
