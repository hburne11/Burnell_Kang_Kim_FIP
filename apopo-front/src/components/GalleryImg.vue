<template>
    <div>
        <img :src="require('@/assets/images/' + imgsrc)" alt="gallery image" class="rats-image">
    </div>
</template>

<script>
export default {
    name: "TheGalleryImg",

    props: {
        imgsrc: String
    }
}
</script>