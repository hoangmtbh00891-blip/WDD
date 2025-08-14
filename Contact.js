document.getElementById('contactForm').addEventListener('submit', function(e){
            e.preventDefault();
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.');
            this.reset();
        });