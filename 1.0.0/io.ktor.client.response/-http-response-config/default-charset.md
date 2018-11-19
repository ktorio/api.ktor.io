---
title: HttpResponseConfig.defaultCharset - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.response</a> / <a href="index.html">HttpResponseConfig</a> / <a href="./default-charset.html">defaultCharset</a></div>

# defaultCharset

<div class="signature"><code><span class="keyword">var </span><span class="identifier">defaultCharset</span><span class="symbol">: </span><span class="identifier">Charset</span></code></div>

Default <a href="#">Charset</a> for response content if not specified, the initial value is ISO_8859_1.
If ISO_8859_1 is not available, UTF-8 is used as a fallback.

