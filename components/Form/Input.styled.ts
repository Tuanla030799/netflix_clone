export const styles = {
  base: 'block rounded-md text-md w-full text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer',
  states: {
    enabled:
      'border-gray-300 ring-primary-50 focus-within:border-primary-300 focus-within:ring-4',
    disabled:
      'border-gray-300 bg-gray-50 cursor-not-allowed child:pointer-events-none',
    error: 'border-error-300 ring-red-100 focus-within:ring-4',
  },
  sizes: {
    md: 'px-6 pt-6 pb-1',
  },
}
