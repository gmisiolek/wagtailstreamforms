from django.utils.text import slugify
from anyascii import anyascii


def get_slug_from_string(label):
    return str(slugify(str(anyascii(label))))
