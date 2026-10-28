
import { useEffect, useState } from 'react'

function Reviews() {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        let active = true

        fetch('https://jsonplaceholder.typicode.com/posts/22/comments')
            .then(response => {
                if (!response.ok) throw new Error('Не вдалося отримати відгуки')
                return response.json()
            })
            .then(data => {
                if (active) setReviews(data)
            })
            .catch(() => {
                if (active) setError(true)
            })
            .finally(() => {
                if (active) setLoading(false)
            })

        return () => {
            active = false
        }
    }, [])

    return (
        <section className="reviews-section mt-6 rounded-[2.5rem] border border-pink-100 bg-white/80 p-7 shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-pink-400">
                03 / Feedback
            </p>

            <h2 className="reviews-title font-display mt-2 text-3xl text-[#4a3541]">
                Відгуки
            </h2>

            <p className="reviews-description mt-2 text-sm text-[#765967]">
                Демонстраційні коментарі, отримані з JSONPlaceholder.
            </p>

            {loading && <p className="mt-4">Завантаження відгуків…</p>}

            {error && (
                <p className="mt-4">
                    Не вдалося завантажити відгуки. Перевір підключення до інтернету.
                </p>
            )}

            <div className="mt-4 grid gap-3">
                {reviews.map(review => (
                    <article
                        key={review.id}
                        className="review-card rounded-2xl border border-pink-100 bg-pink-50/70 p-4"
                    >
                        <h3 className="review-name font-bold text-[#4a3541]">
                            {review.name}
                        </h3>

                        <p className="review-email mt-1 break-words text-xs text-pink-500">
                            {review.email}
                        </p>

                        <p className="review-body mt-2 text-sm leading-6 text-[#765967]">
                            {review.body}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Reviews
