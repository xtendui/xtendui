---
type: "Core"
parent: "List"
title: "List"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["200-Layout"]
---

##Usage

Use `.list` to create a **row list**.

<script type="text/plain" class="language-markup">
  <ul class="list list--default">
    <li><!-- content --></li>
    <li><!-- content --></li>
    <li><!-- content --></li>
  </ul>
</script>

Use `.list-block`> to create a **column list**.

<script type="text/plain" class="language-markup">
  <ul class="list-block list--default">
    <li><!-- content --></li>
    <li><!-- content --></li>
    <li><!-- content --></li>
  </ul>
</script>

###List of anything

You can use list to space childrens like [row](/core/row/row) does. But the childrens are spaced with **margin** instead of **padding** so they aren't used to a grid.

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="list">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default">
          <li>
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            consectetur adipiscing elit.
          </li>
          <li>
            Cras placerat pellentesque pulvinar.
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="block">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list-block list--default">
          <li>
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            consectetur adipiscing elit.
          </li>
          <li>
            Cras placerat pellentesque pulvinar.
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="nested">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list-block list--default">
          <li>
            <ul class="list list--default">
              <li>
                <ul class="list-block list--default">
                  <li>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    consectetur adipiscing elit.
                  </li>
                  <li>
                    Cras placerat pellentesque pulvinar.
                  </li>
                </ul>
              </li>
              <li>
                consectetur adipiscing elit.
              </li>
              <li>
                Cras placerat pellentesque pulvinar.
              </li>
            </ul>
          </li>
          <li>
            <ul class="list list--default">
              <li>
                Lorem ipsum dolor sit amet.
              </li>
              <li>
                consectetur adipiscing elit.
              </li>
              <li>
                Cras placerat pellentesque pulvinar.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>

###List of buttons

In css you can use `.list-btns({});` to style all `> li:not(.xt-custom) > .btn`.

If you want to customize singularly list's buttons use the class `.xt-custom`.

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="custom">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default">
          <li>
            <a href="#">
              Lorem Ipsum
            </a>
          </li>
          <li>
            <button type="button" class="btn btn--primary btn--tiny">
              Dolor sit
            </button>
          </li>
          <li class="xt-custom">
            <button type="button" class="btn btn--primary btn--tiny">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="list">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list-block list--default">
          <li class="xt-custom">
            <button type="button" class="btn btn--primary">
              Lorem Ipsum
            </button>
          </li>
          <li class="xt-custom">
            <button type="button" class="btn btn--default">
              Dolor sit
            </button>
          </li>
          <li class="xt-custom">
            <button type="button" class="btn btn--text btn--tiny">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="nested">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list-block list--default">
          <li>
            <ul class="list list--default">
              <li>
                <ul class="list-block list--default">
                  <li class="xt-custom">
                    <button type="button" class="btn btn--primary">
                      Lorem Ipsum
                    </button>
                  </li>
                  <li class="xt-custom">
                    <button type="button" class="btn btn--default">
                      Dolor sit
                    </button>
                  </li>
                  <li class="xt-custom">
                    <button type="button" class="btn btn--text btn--tiny">
                      Amet
                    </button>
                  </li>
                </ul>
              </li>
              <li class="xt-custom">
                <button type="button" class="btn btn--default">
                  Dolor sit
                </button>
              </li>
              <li class="xt-custom">
                <button type="button" class="btn btn--text btn--tiny">
                  Amet
                </button>
              </li>
            </ul>
          </li>
          <li>
            <ul class="list list--default">
              <li class="xt-custom">
                <button type="button" class="btn btn--primary">
                  Lorem Ipsum
                </button>
              </li>
              <li class="xt-custom">
                <button type="button" class="btn btn--default">
                  Dolor sit
                </button>
              </li>
              <li class="xt-custom">
                <button type="button" class="btn btn--text btn--tiny">
                  Amet
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>

##Space

Lists **automatically** add horizontal and vertical spacing to the contents. You can **specify a different one** with this classes/mixins.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.list-space--{size}`                     | `.list-space--small`          |
| Class responsive        | `.list-space--{size}-{breakpoint}`        | `.list-space--small-sm`       |
| Mixin                   | `.list-space({size})`                     | `.list-space(small)`          |
| Mixin responsive min    | `.list-space({size}, {breakpoint})`       | `.list-space(small, sm)`      |

</div>

<div class="alert">
  <div class="alert_content">
    You can set list's spaces in the `_variables.less` file.
  </div>
</div>

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="none">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default list-space--none">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="tiny">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default list-space--tiny">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="small">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default list-space--small">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="medium">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default list-space--medium">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="big">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default list-space--big">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="giant">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default list-space--giant">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>

##Alignment

Lists **automatically** has left aligment. You can **specify a different one** with this classes/mixins.

You can also set others flex alignments like `.list-btns({ justify-content: space-between; })`.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.list--{alignment}`                      | `.list--center`               |
| Class responsive        | `.list--{alignment}-{breakpoint}`         | `.list--center-sm`            |
| Mixin                   | `.list--{alignment}()`                    | `.list--center()`             |
| Mixin responsive min    | `.list--{alignment}({breakpoint})`        | `.list--center(sm)`           |

</div>

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="left">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list-block list--default list--left">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="center">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list-block list--default list--center">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="right">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list-block list--default list--right">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>

##Direction

Set children's direction inside the flexbox.

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="row">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="flex-direction: row">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="row-reverse">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="flex-direction: row-reverse">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="column">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="flex-direction: column">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="column-reverse">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="flex-direction: column-reverse">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>

##Wrap

Set children's wrapping inside the flexbox.

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="wrap">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="flex-wrap: wrap">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="wrap-reverse">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="flex-wrap: wrap-reverse">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="nowrap">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="flex-wrap: nowrap">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>

##Justify content

Set children's horizontal alignment inside the flexbox.

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="start">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="justify-content: flex-start">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="end">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="justify-content: flex-end">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="center">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="justify-content: center">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="between">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="justify-content: space-between">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="around">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="justify-content: space-around">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>

##Align items

Set children's vertical alignment inside the flexbox.

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="start">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-items: flex-start">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="end">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-items: flex-end">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="center">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-items: center">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="baseline">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-items: baseline">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="stretch">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-items: stretch">
          <li>
            <button type="button" style="align-self: stretch">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Amet
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Amet
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>

##Align content

Set children's vertical alignment inside the flexbox.

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="start">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-content: flex-start">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="end">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-content: flex-end">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="center">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-content: center">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="between">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-content: space-between">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="around">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-content: space-around">
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
          <li>
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="stretch">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="height: 150px; align-content: stretch">
          <li>
            <button type="button" style="align-self: stretch">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Amet
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Amet
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" style="align-self: stretch">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>

##Align self

Set item's vertical alignment inside the flexbox.
If set to **>auto** computes to the parent's `align-items` value.

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="start">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default">
          <li>
            <button type="button" class="btn btn--default" style="height: 100px">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: flex-start">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: flex-start">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="end">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default">
          <li>
            <button type="button" class="btn btn--default" style="height: 100px">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: flex-end">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: flex-end">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="center">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default">
          <li>
            <button type="button" class="btn btn--default" style="height: 100px">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: center">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: center">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="baseline">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default">
          <li>
            <button type="button" class="btn btn--default" style="height: 100px">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: baseline">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: baseline">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="stretch">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default">
          <li>
            <button type="button" class="btn btn--default" style="height: 100px">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: stretch">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: stretch">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="auto">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default" style="align-items: center">
          <li>
            <button type="button" class="btn btn--default" style="height: 100px">
              Lorem Ipsum
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: auto">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button" class="btn btn--default" style="align-self: auto">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>

##Order

Set item's order inside the flexbox.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.order--{number}`                        | `.order--1`                   |
| Class responsive        | `.order--{number}-{breakpoint}`           | `.order--1-sm`                |
| Mixin                   | `.order({number})`                        | `.order(1)`                   |
| Mixin responsive min    | `.order({number}, {breakpoint})`          | `.order(1, sm)`               |

</div>

<div class="alert">
  <div class="alert_content">
    You can set orders in the `_variables.less` file.
  </div>
</div>

<div class="alert">
  <div class="alert_content">
    By default orders from `.order--0` to `.order--2` are negative values.
  </div>
</div>

<demo>
  <div class="gatsby_demo-inline">
    <div class="gatsby_demo_item gatsby_demo_preview" data-name="order">
      <div class="gatsby_demo_source gatsby_demo_source--from" data-lang="language-markup">
        <ul class="list list--default">
          <li class="order--2">
            <button type="button">
              Lorem Ipsum
            </button>
          </li>
          <li class="order--1">
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li class="order--0 order--3-sm">
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</demo>
