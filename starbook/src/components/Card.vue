<template>
    <div class="card">
        <Fieldset>
            <template #legend>
                <div class="flex align-items-center pl-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">{{ title }}</span>
                </div>
            </template>
            <p class="m-0">
                {{description }}
            </p>
        </Fieldset>
    </div>
</template>

<script> 
export default {
    props:{
        title: String,
        description: String 
    }
}
</script>