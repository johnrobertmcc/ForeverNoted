class User < ApplicationRecord

    # validates :email, presence: true, uniqueness: true
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :session_token, presence: true

    has_many :notes
    has_many :notebooks

    ##!!!! REMOVE !!!!!!


    after_initialize :ensure_session_token

    attr_reader :password

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def self.find_by_credentials(email, pw)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(pw) ? user : nil
    end

end
