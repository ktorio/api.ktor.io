---
title: CORS.Configuration.method - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">CORS</a> / <a href="index.html">Configuration</a> / <a href="./method.html">method</a></div>

# method

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">method</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CORS.Configuration$method(io.ktor.http.HttpMethod)/method">method</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Please note that CORS operates ONLY with REAL HTTP methods
and will never consider overridden methods via <code>X-Http-Method-Override</code>.
However you can add them here if you are implementing CORS at client side from the scratch
that you generally don't need to do.

