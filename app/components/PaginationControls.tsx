export default function PaginationControls({ before, after, onPrev, onNext }: any) {
  return (
    <div className="flex justify-between mt-4 gap-5">
      <button disabled={!before} className="btn" onClick={onPrev}>
        Previous
      </button>

      <button disabled={!after} className="btn" onClick={onNext}>
        Next
      </button>
    </div>
  );
}
