```html
<!DOCTYPE html>
<html lang="vi">

<head>

<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

<title>Tiệm Siro đá bào</title>


<style>

/* =====================================
   RESET
===================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* =====================================
   BODY
===================================== */

body {

    width: 100%;
    height: 100vh;

    overflow: hidden;

    background: #111;

    font-family:
        "iCiel Cadena",
        serif;

}


/* =====================================
   TRANG MỞ ĐẦU
===================================== */

.intro {

    width: 100%;
    height: 100vh;

    position: relative;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;



    */

    background-image:

        linear-gradient(
            rgba(0,0,0,0.25),
            rgba(0,0,0,0.55)
        ),

        url("https://i.pinimg.com/736x/36/66/71/3666712b0abe2fffcead41ea2a8355ac.jpg");


    background-size: cover;

    background-position: center;

}


/* =====================================
   ÁNH SÁNG
===================================== */

.intro::before {

    content: "";

    position: absolute;

    inset: 0;

    background:

        radial-gradient(
            circle,
            rgba(255,255,255,0.12),
            transparent 60%
        );

    pointer-events: none;

}


/* =====================================
   TÊN TIỆM
===================================== */

.shop-name {

    position: relative;

    z-index: 2;

    color: white;

    font-size:
        clamp(45px, 8vw, 100px);

    font-weight: 500;

    letter-spacing: 8px;

    text-align: center;


    text-shadow:

        0 3px 15px
        rgba(0,0,0,0.6);


    animation:

        titleAppear
        1.5s
        cubic-bezier(.2,.8,.2,1)
        forwards;

}


@keyframes titleAppear {

    0% {

        opacity: 0;

        transform:
            translateY(30px)
            scale(0.95);

        filter:
            blur(10px);

    }

    100% {

        opacity: 1;

        transform:
            translateY(0)
            scale(1);

        filter:
            blur(0);

    }

}


/* =====================================
   DÒNG PHỤ
===================================== */

.subtitle {

    position: relative;

    z-index: 2;

    margin-top: 15px;

    color:
        rgba(255,255,255,0.85);

    font-family:
        "Segoe UI",
        sans-serif;

    font-size: 14px;

    letter-spacing: 4px;

    animation:

        subtitleAppear
        2s
        ease
        forwards;

}


@keyframes subtitleAppear {

    0% {

        opacity: 0;

        transform:
            translateY(15px);

    }

    100% {

        opacity: 1;

        transform:
            translateY(0);

    }

}


/* =====================================
   NÚT ĐI VÀO
===================================== */

.enter-button {

    position: relative;

    z-index: 2;

    margin-top: 45px;

    padding:
        14px 35px;


    border:
        1px solid
        rgba(255,255,255,0.7);


    border-radius: 40px;


    background:
        rgba(255,255,255,0.08);


    backdrop-filter:
        blur(10px);


    color: white;


    font-family:
        "Segoe UI",
        sans-serif;


    font-size: 14px;


    letter-spacing: 2px;


    cursor: pointer;


    transition:
        0.4s;


    animation:

        buttonAppear
        2.2s
        ease
        forwards;

}


@keyframes buttonAppear {

    0% {

        opacity: 0;

        transform:
            translateY(20px);

    }

    100% {

        opacity: 1;

        transform:
            translateY(0);

    }

}


.enter-button:hover {

    background:
        rgba(255,255,255,0.9);

    color: #222;

    transform:
        translateY(-4px);

    box-shadow:

        0 10px 30px
        rgba(0,0,0,0.3);

}


/* =====================================
   HIỆU ỨNG CHUYỂN TRANG
===================================== */

.page-transition {

    position: fixed;

    inset: 0;

    background: #111;

    z-index: 999;

    pointer-events: none;

    opacity: 0;

}


.page-transition.active {

    animation:
        leavePage
        1.1s
        cubic-bezier(.76,0,.24,1)
        forwards;

}


@keyframes leavePage {

    0% {

        opacity: 0;

        clip-path:
            circle(0% at 50% 50%);

    }

    50% {

        opacity: 1;

        clip-path:
            circle(100% at 50% 50%);

    }

    100% {

        opacity: 1;

        clip-path:
            circle(150% at 50% 50%);

    }

}


/* =====================================
   MOBILE
===================================== */

@media(max-width:600px) {

    .shop-name {

        font-size: 45px;

        letter-spacing: 4px;

    }

    .subtitle {

        font-size: 11px;

        letter-spacing: 2px;

    }

}

</style>

</head>


<body>


<!-- =====================================
     LỚP CHUYỂN TRANG
===================================== -->

<div
    class="page-transition"
    id="pageTransition">
</div>


<!-- =====================================
     TRANG MỞ ĐẦU
===================================== -->

<main class="intro">


    <!-- TÊN TIỆM -->

    <h1 class="shop-name">

        Tiệm Siro đá bào

    </h1>


    <!-- DÒNG PHỤ -->

    <p class="subtitle">

        CHARACTER ARCHIVE

    </p>


    <!-- NÚT -->

    <button
        class="enter-button"
        onclick="enterShop()">

        ✦ &nbsp; Bước vào tiệm &nbsp; ✦

    </button>


</main>



<script>

/* =====================================
   CHUYỂN SANG TRANG TIẾP THEO
===================================== */

function enterShop() {

    const transition =
        document.getElementById(
            "pageTransition"
        );


    transition.classList.add(
        "active"
    );


    /*
       Chờ hiệu ứng chạy xong
       rồi chuyển sang library.html
    */

    setTimeout(() => {

        window.location.href =
            "library.html";

    }, 900);

}

</script>


</body>

</html>
```
