<button
                  className="bg-purple-500 text-white px-4 py-2 rounded-full font-semibold ml-4"
                  onClick={() => {
                    <div className="toast toast-top toast-start">
                      <div className="alert alert-info">
                        <span>New mail arrived.</span>
                      </div>
                      addToCart(item);
                      <div className="alert alert-success">
                        <span>Message sent successfully.</span>
                      </div>
                    </div>;

                    removeFromWishlist(index);
                  }}>
                  Add to Cart
                </button>