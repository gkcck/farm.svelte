<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { confetti } from '@neoconfetti/svelte';
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import { Icon } from '$ui/iconfy';

  const title = 'Ферма 71 • Ферма в Тульской области';
  const description = 'Фермерское хозяйство в Тульской области';

  const size = '100%';
  let visible = false;
  onMount(() =>
    setTimeout(() => {
      visible = true;
    }, 2055)
  );
</script>

<Metrika
  {title}
  {description} />

<main
  class="flex flex-col justify-center items-center text-center h-screen"
  itemprop="mainContentOfPage">
  <div
    use:confetti={{
      force: 0.77,
      duration: 5555,
      destroyAfterDone: true
    }}
    aria-hidden="true" />
  <h1 class="mb-4 text-4xl md:text-5xl xl:text-7xl text-slate-500">Ферма в Тульской области</h1>
  <div class="relative h-[35vmin] aspect-square">
    {#if visible}
      <div
        in:fly={{ y: -500, delay: 1500, duration: 2000 }}
        class="absolute top-0 left-0 h-inherit aspect-square">
        <Icon
          icon="local:cow-happy"
          rel="image"
          class="py-8 text-slate-700 opacity-75 hover:scale-125 duration-500"
          width={size}
          height={size} />
      </div>
    {:else}
      <div
        out:fade={{ duration: 2500 }}
        class="absolute top-0 left-0 h-inherit  aspect-square">
        <Icon
          icon="local:cow"
          rel="image"
          class="py-8 text-slate-700 opacity-75"
          width={size}
          height={size} />
      </div>
    {/if}
  </div>
  <h3 class="mb-8 whitespace-nowrap text-3xl text-slate-400">&copy; Ферма 71</h3>
  <a
    rel="noreferrer nofollow"
    class="button whitespace-nowrap hover:text-gray-100 hover:bg-slate-500"
    href="https://kit.svelte.dev"
    target="_blank">
    2022 &star; Svelte.Kit
  </a>
</main>
