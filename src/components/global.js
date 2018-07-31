import Vue from 'vue'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const requireComponent = require.context(
    '.', false, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)

    const componentName = capitalizeFirstLetter(
        fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    )

    Vue.component(componentName, componentConfig.default || componentConfig)
})
