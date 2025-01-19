import { Categories } from '@/components/categories';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 max-lg:py-[5.5rem] lg:pt-[2.625rem]">
      <h1 className="sr-only">3 Column Preview Card Component</h1>
      <Categories />
    </main>
  );
}
