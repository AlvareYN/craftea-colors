<script>
    import "./app.css"
    const gray = {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5dc",
        400: "#99a1af",
        500: "#6a7282",
        600: "#4a5565",
        700: "#364153",
        800: "#1e2939",
        900: "#101828",
        950: "#030712",
    }
    const electricViolet = {
        50: "#eceeff",
        100: "#dde0ff",
        200: "#c2c6ff",
        300: "#9c9fff",
        400: "#7d75ff",
        500: "#644cff",
        600: "#5f36f5",
        700: "#522ad8",
        800: "#4225ae",
        900: "#382689",
        950: "#231650",
    }
    const white = "#ffffff"
    const dark = "#030712"

    let copied = ""
    function copyColor(value) {
        navigator.clipboard.writeText(value)
        copied = value
        setTimeout(() => {
            if (copied === value) copied = ""
        }, 1200)
    }
</script>

<main
    class="min-h-screen bg-main font-sans flex flex-col items-center justify-center p-8"
>
    <h1 class="text-4xl font-bold mb-8 text-electric-violet-600">
        Craftea.cl Branding Colors
    </h1>
    <section class="w-full max-w-2xl mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Gray Palette</h2>
        <div class="grid grid-cols-2 sm:grid-cols-6 gap-4">
            {#each Object.entries(gray) as [key, value]}
                <div class="flex flex-col items-center">
                    <button
                        type="button"
                        aria-label="Copy {value} to clipboard"
                        class="w-16 h-16 rounded shadow cursor-pointer group relative focus:outline-none focus:ring-2 focus:ring-electric-violet-500"
                        style="background:{value}"
                        on:click={() => copyColor(value)}
                    >
                        {#if copied === value}
                            <span
                                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 text-gray-800 text-xs px-2 py-1 rounded shadow z-10"
                                >Copied!</span
                            >
                        {/if}
                    </button>
                    <span class="mt-2 text-xs text-gray-700">{key}</span>
                    <button
                        type="button"
                        aria-label="Copy {value} to clipboard"
                        class="text-[10px] text-gray-500 cursor-pointer hover:underline focus:outline-none"
                        on:click={() => copyColor(value)}>{value}</button
                    >
                </div>
            {/each}
        </div>
    </section>
    <section class="w-full max-w-2xl mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-electric-violet-700">
            Electric Violet Palette
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-6 gap-4">
            {#each Object.entries(electricViolet) as [key, value]}
                <div class="flex flex-col items-center">
                    <button
                        type="button"
                        aria-label="Copy {value} to clipboard"
                        class="w-16 h-16 rounded shadow cursor-pointer group relative focus:outline-none focus:ring-2 focus:ring-electric-violet-500"
                        style="background:{value}"
                        on:click={() => copyColor(value)}
                    >
                        {#if copied === value}
                            <span
                                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 text-gray-800 text-xs px-2 py-1 rounded shadow z-10"
                                >Copied!</span
                            >
                        {/if}
                    </button>
                    <span class="mt-2 text-xs text-gray-700">{key}</span>
                    <button
                        type="button"
                        aria-label="Copy {value} to clipboard"
                        class="text-[10px] text-gray-500 cursor-pointer hover:underline focus:outline-none"
                        on:click={() => copyColor(value)}>{value}</button
                    >
                </div>
            {/each}
        </div>
    </section>
    <section class="w-full max-w-2xl mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">White & Dark</h2>
        <div class="flex gap-8 justify-center">
            <div class="flex flex-col items-center">
                <button
                    type="button"
                    aria-label="Copy {white} to clipboard"
                    class="w-16 h-16 rounded shadow border cursor-pointer group relative focus:outline-none focus:ring-2 focus:ring-electric-violet-500"
                    style="background:{white}"
                    on:click={() => copyColor(white)}
                >
                    {#if copied === white}
                        <span
                            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded shadow z-10"
                            >Copied!</span
                        >
                    {/if}
                </button>
                <span class="mt-2 text-xs text-gray-700">white</span>
                <button
                    type="button"
                    aria-label="Copy {white} to clipboard"
                    class="text-[10px] text-gray-500 cursor-pointer hover:underline focus:outline-none"
                    on:click={() => copyColor(white)}>{white}</button
                >
            </div>
            <div class="flex flex-col items-center">
                <button
                    type="button"
                    aria-label="Copy {dark} to clipboard"
                    class="w-16 h-16 rounded shadow border cursor-pointer group relative focus:outline-none focus:ring-2 focus:ring-electric-violet-500"
                    style="background:{dark}"
                    on:click={() => copyColor(dark)}
                >
                    {#if copied === dark}
                        <span
                            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 text-gray-800 text-xs px-2 py-1 rounded shadow z-10"
                            >Copied!</span
                        >
                    {/if}
                </button>
                <span class="mt-2 text-xs text-gray-700">dark</span>
                <button
                    type="button"
                    aria-label="Copy {dark} to clipboard"
                    class="text-[10px] text-gray-500 cursor-pointer hover:underline focus:outline-none"
                    on:click={() => copyColor(dark)}>{dark}</button
                >
            </div>
        </div>
    </section>
    <footer class="mt-8 text-gray-500 text-sm">
        Craftea.cl &copy; {new Date().getFullYear()}
    </footer>
</main>
